import React, { useState, useEffect } from 'react';

const Dropdown = () => {
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    // Récupérer la valeur précédemment sélectionnée depuis le stockage local (LocalStorage)
    const storedValue = localStorage.getItem('selectedValue');
    if (storedValue) {
      setSelectedValue(storedValue);
    }
    activeBonneBalise(storedValue);
  }, []);

  const handleDropdownChange = (event) => {
    const newValue = event.target.value;

    // Mettre à jour l'état local et le stockage local
    setSelectedValue(newValue);
    localStorage.setItem('selectedValue', newValue);

    activeBonneBalise(newValue);
  };

  const activeBonneBalise = (newValue) => {
    // Sélectionnez toutes les balises avec l'attribut "data-c1"
    const balisesAvecData = document.querySelectorAll('[data-c1]');
    // Parcourez les balises et activer l'option "hidden"
    balisesAvecData.forEach((balise) => {
      balise.hidden = true;
    });

    // Sélectionnez toutes les balises avec l'attribut "data-c1" égal à newValue
    const balisesAvecDataC1 = document.querySelectorAll('[data-c1="'+newValue+'"]');
    // Parcourez les balises et désactivez l'option "hidden"
    balisesAvecDataC1.forEach((balise) => {
      balise.hidden = false;
    });

    // Sélectionnez toutes les balises avec l'attribut "data-c2" égal à newValue
    const balisesAvecDataC2 = document.querySelectorAll('[data-c2="'+newValue+'"]');
    // Parcourez les balises et désactivez l'option "hidden"
    balisesAvecDataC2.forEach((balise) => {
      balise.hidden = false;
    });
  }

  return (
    <select id="chara-select" value={selectedValue} onChange={handleDropdownChange}>
      <option value="Alice Cross">Alice Cross</option>
      <option value="Aranïos Aïvalate">Aranïos Aïvalate</option>
      <option value="Blaz Baltazar">Blaz Baltazar</option>
      <option value="Diego Jackley">Diego Jackley</option>
      <option value="Loralie Nanako">Loralie Nanako</option>
      <option value="Marion Fournier">Marion Fournier</option>
      <option value="Nathan - Nathaniel Wingate Peaslee">Nathan - Nathaniel Wingate Peaslee</option>
      <option value="Opale Prisma">Opale Prisma</option>
      <option value="William Dyers">William Dyers</option>
    </select>
  );
};

export default Dropdown;