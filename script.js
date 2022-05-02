const searchBar = document.getElementById('search-bar');
const schoolsList = document.getElementById('schools-list');

data = data.sort((a, b) => (a.school_name > b.school_name ? 1 : -1))

data.forEach(schoolObject => {
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

    // if (schoolObject['program_name']) {
    //     var sp = document.createElement('span');
    //     sp.classList.add('tooltiptext');
    //     sp.innerText = schoolObject.program_name;
    //     s.appendChild(sp);
    //   } 
  
    schoolsList.appendChild(p)
})
  


searchBar.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase();
  const allSchools = document.querySelectorAll("p.school-link")
  
  allSchools.forEach((schoolLink) => {
    if (schoolLink.innerText.toLowerCase().includes(searchString) || schoolLink.classList.contains(searchString)) {
        schoolLink.style.opacity = "1";
        schoolLink.style.pointerEvents = "auto";
    } else {
        schoolLink.style.opacity = "0";
        schoolLink.style.pointerEvents = "none";
    }
  })

});
