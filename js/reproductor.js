const playlist = [
              {
                name: "El velo",
                artist: "Estados Alterados",
                src: "assets/music/el_velo.mp3",
                cover: "assets/cover1.jpg"
              },
              {
                name: "Solo",
                artist: "Ekhymosis",
                src: "assets/music/solo.mp3",
                cover: "assets/cover2.jpg"
              },
              {
                name: "Fractal",
                artist: "Margarita Siempre Viva",
                src: "assets/music/fractal.mp3",
                cover: "assets/cover3.jpg"
              }
            ];
            
            let currentIndex = 0;
            const audio = document.getElementById('audio');
            const playBtn = document.getElementById('play');
            const prevBtn = document.getElementById('prev');
            const nextBtn = document.getElementById('next');
            const volumeSlider = document.getElementById('volume');
            const trackName = document.querySelector('.track-name');
            const artistName = document.querySelector('.artist-name');
            const coverImage = document.querySelector('.song-info img');
            
            function loadSong(index) {
              const song = playlist[index];
              audio.src = song.src;
              trackName.textContent = song.name;
              artistName.textContent = song.artist;
              coverImage.src = song.cover || "https://picsum.photos/50";
            }
            
            playBtn.addEventListener('click', () => {
              if (audio.paused) {
                audio.play();
                playBtn.textContent = '⏸️';
              } else {
                audio.pause();
                playBtn.textContent = '▶️';
              }
            });
            
            nextBtn.addEventListener('click', () => {
              currentIndex = (currentIndex + 1) % playlist.length;
              loadSong(currentIndex);
              audio.play();
              playBtn.textContent = '⏸️';
            });
            
            prevBtn.addEventListener('click', () => {
              currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
              loadSong(currentIndex);
              audio.play();
              playBtn.textContent = '⏸️';
            });
            
            volumeSlider.addEventListener('input', () => {
              audio.volume = volumeSlider.value;
            });
            
            audio.addEventListener('ended', () => {
              nextBtn.click();
            });
            
            loadSong(currentIndex);
            
            const progressBar = document.getElementById('progress');
            const currentTimeEl = document.getElementById('currentTime');
            const durationEl = document.getElementById('duration');
            
            // Convierte segundos a mm:ss
            function formatTime(time) {
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time % 60).toString().padStart(2, '0');
            return `${minutes}:${seconds}`;
            }
            
            // Actualiza barra y tiempos durante reproducción
            audio.addEventListener('timeupdate', () => {
            if (!isNaN(audio.duration)) {
            const progress = (audio.currentTime / audio.duration) * 100;
            progressBar.value = progress;
            
            currentTimeEl.textContent = formatTime(audio.currentTime);
            durationEl.textContent = formatTime(audio.duration);
            }
            });
            
            // Permitir cambiar de posición en la canción
            progressBar.addEventListener('input', () => {
            if (!isNaN(audio.duration)) {
            const seekTime = (progressBar.value / 100) * audio.duration;
            audio.currentTime = seekTime;
            }
            });