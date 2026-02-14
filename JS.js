 <script>
    let escalaSi = 1;

    function moverBoton() {
      const noBtn = document.getElementById("noBtn");
      const yesBtn = document.getElementById("yesBtn");

      const btnWidth = noBtn.offsetWidth;
      const btnHeight = noBtn.offsetHeight;

      const padding = 20;

      const maxX = window.innerWidth - btnWidth - padding;
      const maxY = window.innerHeight - btnHeight - padding;

      const x = Math.random() * maxX;
      const y = Math.random() * maxY;

      noBtn.style.position = "fixed";
      noBtn.style.left = x + "px";
      noBtn.style.top = y + "px";

      escalaSi += 0.15;
      yesBtn.style.transform = `scale(${escalaSi})`;
    }

    function mostrarModal() {
      document.getElementById("modal").classList.add("show");
    }

    function cerrarModal() {
      document.getElementById("modal").classList.remove("show");
    }
  </script>