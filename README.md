# quiprendquoi

## Installation

`npm install`

`npm run start`

## Améliorations apportées

- Affichage de la liste des items sur la page événément (`app.js`, `party.pug`)
- Possibilité de supprimer un item (`app.js`, `party.pug`)

## Article personnel

### Sujet : CSS @supports

Lorsque l'on utilise les nouvelles propriétés css, css vas ignorer les lignes de codes qu'il ne comprend pas. Si un navigateur ne supporte pas ces propriétés, il ne les appliquera donc pas. Cependant, ce n'est pas le cas pour toutes les propriétés et notamment background-blend-modes. Cette propriété qui va mélanger deux dégradés différents avec une image pour mettre en valeur certaine couleur ne vas pas s'appliquer à tous les navigateurs et le résultat pourra être étrange. En effet sur les navigateurs ne le supportant pas les dégradés se situeront au-dessus de l'image, ainsi, ils ne se mélangeront pas avec celle-ci. C'est ici qu'intervient @supports, cette propriété css vas écrire une déclaration conditionnelle, elle ne sera prise en compte que sur les navigateurs pouvant la supporter. Ainsi, nous sommes clairement dans l'amélioration progressive.
