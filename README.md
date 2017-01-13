#JavaScript (ECMAScript6) MultiConversion Clock

The App converts the current time, date into binary or roman numeral format.
1 unit (hour, minute, second,...or year) represents one binary/roman number. The whole clock is shown in a structured html table and following settings are possible:
+ switch between AM/PM or 24h
+ the way how the binary numbers are shown: blocks and/or 01
+ enable/disable decimals
+ update 08.01.17: if year >=64 add one additional column
+ update 10.01.17: using convenience of localStorage to save settings. => when app (browser) closed, and opened again the previous settings are kept.
+ update 13.01.17: extension of previous project: roman numeral conversion, strategy factory pattern for switching between bin/rom conversions, refactorings
