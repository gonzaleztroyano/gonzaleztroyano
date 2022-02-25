#!/usr/bin/env python3

import os

if os.name == 'nt':
    os.system('cls')
elif os.name == 'posix':
    os.system('clear')
print('','Copie el siguiente texto en su archivo README:','--------------------------------------------------------','',sep='\n')

files = [f for f in os.listdir('.') if os.path.isdir(f)]
for f in files:
    if f.startswith('.') == False:
      print (' * [',f,'](./',f,')',sep='')
print('','Este listado ha sido generado automáticamente con [este script en Python](https://github.com/gonzaleztroyano/gonzaleztroyano/blob/main/generate-readme-content.py).','',sep='\n')
