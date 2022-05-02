const searchBar = document.getElementById('search-bar');
const schoolsList = document.getElementById('schools-list');

currentData = data.sort((a, b) => (a.school_name > b.school_name ? 1 : -1))


function displaySchools() {
    schoolsList.textContent = '';
  
    currentData.forEach((school) => displaySchool(school));
}
  

function displaySchool(schoolObject) {
    var p = document.createElement('p');
    p.className = 'school-link';

    var s = document.createElement('span')
    s.className = "tooltip"

    p.appendChild(s)
  
    if (schoolObject['url']) {
      var a = document.createElement('a');
      a.href = schoolObject['url'];
      a.innerText = schoolObject.school_name;
      a.target = '_blank';
      s.appendChild(a);
    } else {
        s.innerText = schoolObject.school_name
    }

    if (schoolObject['alternates']) {
        schoolObject['alternates'].forEach(alternate => {
          p.classList.add(alternate.replace(/\s+/g, '-').toLowerCase())
        })
      }
  
    schoolsList.appendChild(p)
}
  


searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const schoolResults = data.filter((schoolObject) => {
      return schoolObject.school_name.toLowerCase().includes(searchString);
    });
  
    currentData = schoolResults
  
    displaySchools();


//   const allSchools = document.querySelectorAll("p.school-link")
  
//   data.forEach((schoolLink) => {
//     if (schoolLink.innerText.toLowerCase().includes(searchString)) {
//         schoolLink.style.opacity = "1"
//         // schoolLink.style.position = "relative"
//         schoolLink.style.pointerEvents = "auto";
//     } else {
//         // schoolLink.style.position = "fixed"
//         schoolLink.style.opacity = "0"
//         schoolLink.style.pointerEvents = "none";
//     }
//   })

});

displaySchools()