## Tea H(TTP)ouse
### Cerințe
Sa se implementeze o aplicatie Web care – via un API Web REST – simuleaza o ceainarie destinata in special studentilor 
informaticieni. Interactiunea cu "clientii" se va realiza din pagini Web publice gazduite pe un anumit server Web, 
pe baza campului 'Referer' din antetul unui mesaj HTTP. Aplicatia trebuie sa puna la dispozitia "clientilor" o serie 
de resurse identificate via URI precum '/intrare', '/meniu', '/preferinta/ceai/’ ‘/preferinta/ceai?de=tei’, '/vreau/suc', 
'/comanda/ceai/?fara=zahar', '/comanda/zacusca', '/nota', '/iesire' etc. (dati frau liber imaginatiei). Desi identificarea 
clientului se va realiza pe baza contului din URL-ul oferit de Referer, trebuie mentinut un nivel minimal contabil si 
informativ: ce produse sunt in stoc si la ce pret, cine si ce a comandat, care e valoarea totala a notei de plata, la ce 
ora s-a inregistrat o comanda, cine mai era atunci in ceainarie etc. Resursele sunt disponibile in cantitati finite, 
eventual ajustabile dinamic. "Filmul" ocuparii localului va putea fi expus, in mod dinamic, ca formate precum HTML, JSON 
si ca flux de stiri Atom. De asemenea, “proprietarul” ceainariei trebuie sa raspunda clientilor in mod "politicos” din 
punct de vedere HTTP -- exemplu: daca se recurge la 'GET /comanda/alcool', se va intoarce codul 403 Forbidden. A se lua 
in consideratie si alte exceptii.

Componența echipei
-- 
Emima Ostafe, Dumitriu Oana Florentina, Vlaișan Flavia

Tehnologii Web - FII UAIC - 2023
---




