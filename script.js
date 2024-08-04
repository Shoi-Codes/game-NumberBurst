let timer = 60;
      let score = 0;
      let hitrn = 0;

      function increaseScore() {
        score += 10;
        document.getElementById("scoreVal").textContent = score;
      }

      function getNewHit() {
        hitrn = Math.floor(Math.random() * 10);
        document.getElementById("hitVal").textContent = hitrn;
      }

      function makeBubble() {
        let clutter = "";
        for (let i = 0; i < 275; i++) {
          const rn = Math.floor(Math.random() * 10);
          clutter += `<div class="bubble">${rn}</div>`;
        }
        document.getElementById("pbtm").innerHTML = clutter;
      }

      function runTimer() {
        const timerInt = setInterval(() => {
          if (timer > 0) {
            timer--;
            document.getElementById("timerVal").textContent = timer;
          } else {
            clearInterval(timerInt);
            gameOver();
          }
        }, 1000);
      }

      function gameOver() {
        document.getElementById("game-panel").classList.add("hidden");
        document.getElementById("game-over").classList.remove("hidden");
        document.getElementById("final-score").textContent = score;
      }

      document.querySelector("#pbtm").addEventListener("click", (dets) => {
        const clickedNum = Number(dets.target.textContent);
        if (clickedNum === hitrn) {
          increaseScore();
          getNewHit();
          makeBubble();
        }
      });

      document.getElementById("start-game").addEventListener("click", () => {
        document.getElementById("main-menu").classList.add("hidden");
        document.getElementById("game-panel").classList.remove("hidden");
        makeBubble();
        runTimer();
        getNewHit();
      });

      document.getElementById("restart-game").addEventListener("click", () => {
        document.getElementById("game-over").classList.add("hidden");
        document.getElementById("main-menu").classList.remove("hidden");
        timer = 60;
        score = 0;
        document.getElementById("timerVal").textContent = timer;
        document.getElementById("scoreVal").textContent = score;
        document.getElementById("hitVal").textContent = 0;
      });

      document.querySelectorAll(".theme-button").forEach((button) => {
        button.addEventListener("click", (e) => {
          document.body.className = "";
          document.body.classList.add(e.target.dataset.theme);
        });
      });