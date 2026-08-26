<?php
/**
 * Endpoint formularza kontaktowego SFT Computers.
 *
 * Odbiera zgłoszenie z formularza (JSON), waliduje i sanityzuje dane,
 * a następnie wysyła e-mail w ustalonym formacie. Adres odbiorcy zależy
 * od kategorii zapytania (patrz resolveRecipient).
 *
 * Wymagania: PHP z włączoną funkcją mail() (standard na hostingu współdzielonym).
 * Brak zewnętrznych zależności (bez Composera) - plik można wgrać samym FTP
 * do tego samego katalogu, w którym leży index.html strony.
 */

declare(strict_types=1);

// --- Konfiguracja odbiorców wg kategorii ------------------------------------
$EMAIL_SERWIS = "serwis@sft.net.pl";
$EMAIL_SKLEP  = "sklep@sft.net.pl";
$EMAIL_BIURO  = "biuro@sft.net.pl";
$FROM_NAME    = "Formularz SFT Computers";
// ----------------------------------------------------------------------------

header("Content-Type: application/json; charset=UTF-8");

/**
 * Zwraca odpowiedź JSON i przerywa wykonywanie skryptu.
 */
function respond(bool $success, string $message, int $statusCode = 200): void
{
    http_response_code($statusCode);
    echo json_encode(["success" => $success, "message" => $message], JSON_UNESCAPED_UNICODE);
    exit;
}

/**
 * Koduje tekst do nagłówka e-mail zgodnie z RFC 2047 (obsługa polskich znaków w Subject/From/Reply-To).
 */
function encodeHeaderText(string $text): string
{
    return "=?UTF-8?B?" . base64_encode($text) . "?=";
}

/**
 * Usuwa znaki nowej linii/CR z wartości trafiających do nagłówków e-mail,
 * żeby uniemożliwić tzw. header injection (wstrzykiwanie dodatkowych nagłówków, np. Bcc).
 */
function cleanHeaderField(string $value): string
{
    return trim(str_replace(["\r", "\n"], " ", $value));
}

/**
 * Dobiera skrzynkę odbiorczą na podstawie ID kategorii z formularza.
 *
 * - serwis / inny-problem  → serwis@sft.net.pl
 * - wspolpraca             → biuro@sft.net.pl
 * - pozostałe kategorie    → sklep@sft.net.pl
 */
function resolveRecipient(string $categoryId, string $emailSerwis, string $emailSklep, string $emailBiuro): string
{
    if ($categoryId === "wspolpraca") {
        return $emailBiuro;
    }

    if ($categoryId === "serwis" || $categoryId === "inny-problem") {
        return $emailSerwis;
    }

    return $emailSklep;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    respond(false, "Nieprawidłowa metoda żądania.", 405);
}

$raw = file_get_contents("php://input");
$data = json_decode($raw, true);

if (!is_array($data)) {
    // Wsparcie także dla zwykłego application/x-www-form-urlencoded / FormData.
    $data = $_POST;
}

// Honeypot - pole niewidoczne dla ludzi, wypełniane tylko przez boty.
// Jeśli wypełnione, udajemy sukces i nic nie wysyłamy.
if (!empty($data["website"] ?? "")) {
    respond(true, "OK");
}

$name       = cleanHeaderField((string) ($data["name"] ?? ""));
$phone      = cleanHeaderField((string) ($data["phone"] ?? ""));
$email      = cleanHeaderField((string) ($data["email"] ?? ""));
$category   = cleanHeaderField((string) ($data["category"] ?? ""));
$categoryId = cleanHeaderField((string) ($data["categoryId"] ?? ""));
$message    = trim((string) ($data["message"] ?? "")); // treść może mieć wiele linii - nie trafia do nagłówków, więc to bezpieczne

if ($name === "" || $phone === "" || $email === "" || $category === "" || $message === "") {
    respond(false, "Wszystkie pola są wymagane.", 422);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(false, "Nieprawidłowy adres e-mail.", 422);
}

if (mb_strlen($name) > 150 || mb_strlen($phone) > 50 || mb_strlen($category) > 150 || mb_strlen($message) > 5000) {
    respond(false, "Jedno z pól przekracza dopuszczalną długość.", 422);
}

$recipientEmail = resolveRecipient($categoryId, $EMAIL_SERWIS, $EMAIL_SKLEP, $EMAIL_BIURO);

$subject = "Nowe zapytanie z formularza - " . $category;

$body  = "Imię i nazwisko: " . $name . "\n";
$body .= "Email: " . $email . "\n";
$body .= "Numer telefonu: " . $phone . "\n";
$body .= "Kategoria: " . $category . "\n";
$body .= "Treść: " . $message . "\n";

// From musi być adresem z tej samej domeny co serwer wysyłający, inaczej wiele
// hostingów odrzuca albo oznacza wiadomość jako spam. Zgłaszający widoczny jest
// jako Reply-To, więc odpowiedź i tak trafi bezpośrednio do niego.
$serverHost = $_SERVER["SERVER_NAME"] ?? "localhost";
$fromEmail  = "no-reply@" . preg_replace('/^www\./', '', $serverHost);

$headers  = "From: " . encodeHeaderText($FROM_NAME) . " <" . $fromEmail . ">\r\n";
$headers .= "Reply-To: " . encodeHeaderText($name) . " <" . $email . ">\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

mb_internal_encoding("UTF-8");

$sent = mail($recipientEmail, encodeHeaderText($subject), $body, $headers);

if ($sent) {
    respond(true, "Wiadomość została wysłana.");
}

respond(false, "Nie udało się wysłać wiadomości. Spróbuj zadzwonić lub napisać e-mail bezpośrednio.", 500);
