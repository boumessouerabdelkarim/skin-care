const questions = [
    {
      "id": "image_upload",
      "question": "",
      "type": "image_upload"
    },
    {
      "id": 40,
      "question": "Dans quelle tranche d'âge vous situez-vous ?",
      "type": "choix simple",
      "choix": ["moins de 18 ans","18-29 ans","30-44 ans","plus que 45 ans"]
    },
    {
      "id": 38,
      "question": "D'autres choses à nous indiquer concernant ta peau ?",
      "type": "text"
    },
    {
      "id": 37,
      "question": "Quels ingrédients cosmétiques souhaites-tu éviter ?",
      "type": "choix multiple",
      "choix": [
        "Alcool desséchant",
        "Silicones",
        "Parfum",
        "Huile Essentielle",
        "Phénoxyéthanol",
        "Parabens",
        "Allergènes cosmétiques",
        "Aucun"
      ]
    },
    {
      "id": 36,
      "question": "Es-tu allergique ou souhaites-tu éviter certains ingrédients cosmétiques ?",
      "type": "choix simple",
      "choix": ["Oui", "Non"]
    },
    {
      "id": 35,
      "question": "Pourrais-tu m'indiquer les cas qui te concernent ?",
      "type": "choix multiple",
      "choix": [
        "Je fume au moins une cigarette par jour",
        "Je m'expose au soleil au minimum 2h par jour en ce moment",
        "Je dors moins de 6h par nuit",
        "Je suis très stressé.e en ce moment",
        "Je consomme plus de 5 boissons alcoolisées par semaine",
        "Je passe plus de 5h par jour devant des écrans",
        "Je me fais très souvent plaisir avec sucreries, fritures & snacks",
        "Aucun des cas ci-dessus"
      ]
    },
    {
      "id": 34,
      "question": "Est-ce que tu te maquilles ?",
      "type": "choix simple",
      "choix": [
        "Jamais",
        "Rarement",
        "Régulièrement",
        "Quotidiennement, mais une seule partie du visage (yeux, lèvres, teint...)",
        "Quotidiennement, plusieurs parties du visage (yeux, lèvres/res, teint...)"
      ]
    },
    
    {
      "id": 27,
      "question": "Sélectionne les ingrédients cosmétiques que tu as déjà utilisés et que tu tolères bien :",
      "type": "choix multiple",
      "choix": [
        "Rétinol",
        "AHA - Acides de Fruits",
        "Huiles essentielles",
        "Parfum",
        "Acide Glycolique",
        "Acide Lactique",
        "Acide Mandélique",
        "Je ne sais pas"
      ]
    },
    {
      "id": 26,
      "question": "Sélectionne les problèmes qui influencent négativement la peau de ton visage (pas du corps)",
      "type": "choix multiple",
      "choix": [
        "Aucun",
        "Couperose ou rosacée",
        "Forte sensibilité & rougeurs",
        "Psoriasis ou eczéma",
        "Peau atopique",
        "Dermite séborrhéique",
        "Changement ou arrêt de pilule récent",
        "Pose ou dépose de stérilet ou implant hormonal récent",
        "SOPK : Syndrome des ovaires polykystiques",
        "Dermatillomanie",
        "Ménopause",
        "Problèmes de thyroïde"
      ]
    },
    {
      "id": 25,
      "question": "Souhaites-tu que je te recommande un soin pour le contour des yeux ?",
      "type": "choix simple",
      "choix": ["Oui", "Non"]
    },
    {
      "id": 24,
      "question": "Sélectionne tous les problèmes qui te concernent :",
      "type": "choix simple",
      "choix": [
        "Je ne suis pas concerné.e",
        "Mes paupières sont tombantes",
        "Mes sillons naso-géniens sont très visibles (zone entre le nez & la bouche)",
        "Mes joues s'affaissent",
        "Ma peau du cou se relâche"
      ]
    },
    {
      "id": 23,
      "question": "LES TACHES D'HYPERPIGMENTATION",
      "type": "choix simple",
      "choix": [
        "J'ai rarement ou jamais de taches brunes sur le visage",
        "J'ai beaucoup de taches brunes sur le visage en continu",
        "J'ai régulièrement quelques taches brunes sur le visage"
      ]
    },
    {
      "id": 22,
      "question": "LA SÉCHERESSE",
      "type": "choix simple",
      "choix": [
        "Ma peau est agréable et souple au toucher",
        "Ma peau est peu souple et rêche (sensation de toucher du papier)",
        "Ma peau n'est pas particulièrement souple mais n'est pas rêche non plus"
      ]
    },
    {
      "id": 21,
      "question": "LES ROUGEURS",
      "type": "choix simple",
      "choix": [
        "Je n'ai jamais de plaques ou de petites taches rouges sur le visage",
        "J'ai des problèmes médicaux (rosacée, eczéma)",
        "J'ai fréquemment des plaques ou de petites taches rouges sur le visage",
        "J'ai de temps en temps des plaques ou des petites taches rouges sur le visage"
      ]
    },
    {
      "id": 20,
      "question": "LES PETITS BOUTONS & PEAU GRANULEUSE",
      "type": "choix simple",
      "choix": [
        "Je n'ai jamais de petits boutons et ma peau n'est pas granuleuse",
        "Mon visage est constamment parsemé de petits boutons et ma peau est granuleuse",
        "J'ai régulièrement des petits boutons ou ma peau est granuleuse",
        "J'ai de temps en temps des petits boutons ou ma peau est granuleuse"
      ]
    },
    {
      "id": 19,
      "question": "LES PORES DILATÉS : les pores sont les petits orifices (les petits trous) à la surface de la peau.",
      "type": "choix simple",
      "choix": [
        "Je ne vois quasiment pas les pores de ma peau",
        "Je vois clairement les pores de ma peau à bonne distance du miroir",
        "Je vois clairement les pores de ma peau visage en étant très près du miroir (environ 10 cm du miroir)"
      ]
    },
    {
      "id": 18,
      "question": "LES RIDES & RIDULES",
      "type": "choix simple",
      "choix": [
        "Je n'ai pas de rides sur le visage",
        "J'ai plusieurs rides profondes sur le visage, même quand je ne souris pas",
        "J'ai quelques rides peu profondes sur le visage, même quand je ne souris pas",
        "J'ai quelques rides sur le visage uniquement quand je souris"
      ]
    },
    {
      "id": 17,
      "question": " LES POINTS NOIRS",
      "type": "choix simple",
      "choix": [
        "Je n'ai pas de points noirs",
        "J'ai beaucoup de points noirs et ils font plus de 1mm de diamètre",
        "J'ai beaucoup de points noirs et ils font moins de 1mm de diamètre",
        "J'ai quelques points noirs"
      ]
    },
    {
      "id": 16,
      "question": "LE TEINT TERNE",
      "type": "choix simple",
      "choix": [
        "Mon teint de peau ne me pose pas de problème",
        "Je trouve ma peau grisâtre"
      ]
    },
    {
      "id": 8,
      "question": "LES MARQUES POST-BOUTONS ",
      "type": "choix simple",
      "choix": [
        "je n'ai pas de marques post-boutons",
        "Mon visage est recouvert de marques en creux et pigmentées",
        "Mon visage est recouvert de marques pigmentées",
        "J'ai quelques marques en creux et pigmentées",
        "J'ai quelques marques en creux",
        "J'ai quelques marques pigmentées"
      ]
    },
   
    {
      "id": 14,
      "question": "Tu es... ",
      "type": "choix simple",
      "choix": ["une femme", "un homme"]
    },
    {
      "id": 2,
      "question": "Quelle définition correspond le mieux à ta peau ? Certains cosmétiques ne sont pas adaptés à toutes les couleurs de peau. ",
      "type": "choix simple",
      "choix": ["Noire", "Foncée", "Mate", "Claire", "Très claire"]
    },
    {
      "id": 3,
      "question": "As-tu des rougeurs, picotements ou démangeaisons lorsque tu appliques un nouveau soin visage ? ",
      "type": "choix simple",
      "choix": ["Jamais", "Rarement", "Souvent", "Très souvent"]
    },
    {
      "id": 4,
      "question": "Est-ce que ta peau tiraille ? Si elle ne t'a jamais gêné, alors c'est qu'elle ne tiraille pas. ",
      "type": "choix simple",
      "choix": [
        "Non, jamais",
        "Oui, souvent",
        "Oui, mais seulement après s'être lavé le visage"
      ]
    },
    {
      "id": 5,
      "question": "Ta peau est-elle luisante et pleine de sébum en milieu de journée ? ",
      "type": "choix simple",
      "choix": [
        "Non, pas vraiment",
        "Oui, sur le front et le nez, pas sur les joues",
        "Oui, partout sur le visage y compris les joues"
      ]
    },
    {
      "id": 6,
      "question": "PEAU À TENDANCE ACNÉIQUE ",
      "type": "choix simple",
      "choix": [
        "Je n'ai jamais de boutons sur le visage",
        "Mon visage est constamment recouvert de plaques de boutons",
        "Mon menton et ma mâchoire sont fréquemment recouverts de boutons",
        "J'ai de temps en temps quelques boutons sur le visage"
      ]
    },
    {
      "id": 7,
      "question": "PEAU À TENDANCE ACNÉIQUE : Traitement dermatologique ",
      "type": "choix simple",
      "choix": [
        "Je ne suis pas de traitement dermatologique",
        "Je suis un traitement médical prescrit par un dermatologue"
      ]
    },
    {
      "id": 9,
      "question": " L'EXCÈS DE SÉBUM ",
      "type": "choix simple",
      "choix": [
        "Ma peau est rarement luisante",
        "Ma peau est luisante deux heures ou moins après l'avoir nettoyée",
        "Ma peau devient luisante en fin de journée"
      ]
    },
    
    
    {
      "id": 11,
      "question": "La pollution est un ennemi de la peau. Je vis dans un environnement ... ",
      "type": "choix simple",
      "choix": ["Peu pollué", "Très pollué", "Moyennement pollué","Je ne sais pas"]
    },
    {
      "id": 12,
      "question": "Quel est le meilleur terme qui décrit le climat votre région ? ",
      "type": "choix simple",
      "choix": ["Humide", "Ensoleillé", "Chaud"]
    }
  ]
  ;
  
  // Exporter les questions triées par ID (du plus grand au plus petit)
  export default questions.sort((a, b) => {
    // Garder l'upload d'image en premier
    if (a.id === "image_upload") return -1;
    if (b.id === "image_upload") return 1;
    // Trier les autres questions par ID
    return b.id - a.id;
  });