#!/bin/bash
Liczba_Commitow=$(git rev-list --count HEAD)

echo "Liczba commitow: $Liczba_Commitow"



Najlepszy_Autor_Linia=$(git shortlog -sn | head -n 1)
Ilosc_Commitow=$(echo "$Najlepszy_Autor_Linia" | awk '{print $1}')
Nick_Autora=$(echo "$Najlepszy_Autor_Linia" | sed -E 's/^[ \t]*[0-9]+[ \t]+//')
if [ "$Ilosc_Commitow" -gt 30 ]; then
    echo "Najlepszy autor: $Nick_Autora (liczba commitów: $Ilosc_Commitow)"
fi


Najwiejszy_Commit=$(git log --numstat --pretty=format:"COMMIT %H" | awk '
    /^COMMIT/{hash=$2; next}
    {sum[hash]+=$1+$2}
    END{for(h in sum) print sum[h], h}
    '| sort -nr | head -n 1)

echo "Najwiekszy commit: $Najwiejszy_Commit"

Data_Ostatniego_Commita=$(git log --pretty=format:"%ad" --date=short | head -n 1)

echo "Data ostatniego commita: $Data_Ostatniego_Commita"

Liczba_Branchow=$(git branch | wc -l)

echo "Liczba branchow: $Liczba_Branchow"

Liczba_Lini=$(git ls-files | xargs cat | wc -l)

echo "Liczba lini: $Liczba_Lini"

Dlugosc_Najdluzszej_Lini=$(git log --format="%s" | awk '{ print length }' | sort -nr | head -n 1)
Najdlusza_Linia=$(git log --format="%s" | awk '{ print length, $0 }' | sort -nr | head -n 1 | sed 's/^[0-9]* //')

echo "Najdłuższy opis ma $Dlugosc_Najdluzszej_Lini znaków i brzmi: $Najdlusza_Linia"

MiejsceNaDysku=$(df -h | grep '/$' | awk '{print $4}')

echo "$MiejsceNaDysku"