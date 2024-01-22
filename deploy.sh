function deploy() {
  (npx http-server -p 8080 ./dist & npx linkinator http://0.0.0.0:8080 --skip https://www.linkedin.com/in/Perri --recurse) && git push
}
