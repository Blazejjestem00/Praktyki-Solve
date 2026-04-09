## Node
### Instalacja
```
# Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash
# in lieu of restarting the shell
\. "$HOME/.nvm/nvm.sh"
# Download and install Node.js:
nvm install 24
# Verify the Node.js version:
node -v # Should print "v24.14.1".
# Verify npm version:
npm -v # Should print "11.11.0".
```
### Po zainstalowaniu
```
# Jaka wersja node
node -v
# Sprawdź aktualnie używaną wersję
nvm current
# Zobacz wszystkie zainstalowane wersje
nvm ls
```
### Wczytanie Node w VSC
```
VSC off / on => aby zmiany weszły
```
## React – Vite
```
# W VSC, gdy jest otwarty folder => `cd "tinder-clone"`
npm i # zainstalowanie package
```