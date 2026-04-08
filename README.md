# Praktyki-Solve

## Komendy Git – Najważniejsze komendy

### Sprawdzenie stanu repozytorium
```
git status
```
Sprawdza aktualny stan repozytorium – pokazuje zmodyfikowane, dodane (staged) i nowe (untracked) pliki.

### Dodawanie zmian
```
git add .                    # dodaje wszystkie zmiany w projekcie
git add plik.py              # dodaje konkretny plik
git add folder/              # dodaje cały folder
```
Dodaje zmiany do obszaru przygotowanego (staging area).

### Zatwierdzanie zmian (commit)
```
git commit -m "krótki, opisowy komunikat zmian"
```
Zapisuje zmiany lokalnie wraz z opisem.

### Wysyłanie zmian na GitHub
```
git push                     # wysyła zmiany na zdalny branch
git push origin main         # jawne wskazanie brancha
git push -u origin main      # pierwsze wypchnięcie (ustawia upstream/tracking)
```

### Pobieranie zmian
```
git pull                     # pobiera i łączy zmiany (fetch + merge)
git fetch --all              # tylko pobiera informacje (bezpieczniejsze)
```

## Najczęściej używana sekwencja pracy

```
git status
git add .
git commit -m "opis tego co zrobiłem"
git push
```

---

## Przydatne skróty w VS Code

| Skrót                  | Działanie                          |
|------------------------|------------------------------------|
| `Ctrl + Shift + V`     | Otwiera podgląd Markdown           |
