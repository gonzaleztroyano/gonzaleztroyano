#!/usr/bin/env python3

import os
os.system('clear')
print('')
print('Copie el siguiente texto en su archivo README:')
print('--------------------------------------------------------')

files = [f for f in os.listdir('.') if os.path.isdir(f)]
for f in files:
    if f.startswith('.') == False:
      print (' * [',f,'](./',f,')',sep='')