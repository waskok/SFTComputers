/** Przejście na stronę główną (#top) z odświeżeniem routingu hash (zamyka politykę prywatności). */
export function goToHome(smooth = true) {
  const scroll = () => {
    window.scrollTo({ top: 0, behavior: smooth ? "smooth" : "auto" });
  };

  if (window.location.hash === "#top" || window.location.hash === "") {
    // Hash się nie zmieni, więc hashchange nie odpali — wymuszamy synchronizację widoku.
    window.dispatchEvent(new Event("hashchange"));
    scroll();
    return;
  }

  window.location.hash = "top";
}
