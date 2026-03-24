Remove-Item -Recurse -Force temp-app -ErrorAction SilentlyContinue
npm create vite@latest temp-app -- --template react
Copy-Item -Recurse -Force temp-app\* .
Copy-Item -Recurse -Force temp-app\.* . -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force temp-app
npm install
npm install -D tailwindcss@3.4.17 postcss autoprefixer
npx tailwindcss init -p
npm install gsap @gsap/react lucide-react
New-Item -ItemType Directory -Force -Path "public\images"
Copy-Item "C:\Users\Diogo\.gemini\antigravity\brain\7da85ed3-cb94-4998-bedb-823bed1d00bd\hero_*.png" "public\images\hero.jpg"
Copy-Item "C:\Users\Diogo\.gemini\antigravity\brain\7da85ed3-cb94-4998-bedb-823bed1d00bd\grid_1_*.png" "public\images\grid-1.jpg"
Copy-Item "C:\Users\Diogo\.gemini\antigravity\brain\7da85ed3-cb94-4998-bedb-823bed1d00bd\grid_2_*.png" "public\images\grid-2.jpg"
Copy-Item "C:\Users\Diogo\.gemini\antigravity\brain\7da85ed3-cb94-4998-bedb-823bed1d00bd\grid_3_*.png" "public\images\grid-3.jpg"
Copy-Item "C:\Users\Diogo\.gemini\antigravity\brain\7da85ed3-cb94-4998-bedb-823bed1d00bd\grid_4_*.png" "public\images\grid-4.jpg"
Copy-Item "C:\Users\Diogo\.gemini\antigravity\brain\7da85ed3-cb94-4998-bedb-823bed1d00bd\grid_5_*.png" "public\images\grid-5.jpg"
Copy-Item "C:\Users\Diogo\.gemini\antigravity\brain\7da85ed3-cb94-4998-bedb-823bed1d00bd\grid_6_*.png" "public\images\grid-6.jpg"
Copy-Item "C:\Users\Diogo\.gemini\antigravity\brain\7da85ed3-cb94-4998-bedb-823bed1d00bd\grid_7_*.png" "public\images\grid-7.jpg"
Copy-Item "C:\Users\Diogo\.gemini\antigravity\brain\7da85ed3-cb94-4998-bedb-823bed1d00bd\grid_8_*.png" "public\images\grid-8.jpg"
Copy-Item "C:\Users\Diogo\.gemini\antigravity\brain\7da85ed3-cb94-4998-bedb-823bed1d00bd\diane_*.png" "public\images\diane.jpg"
