function renderPosts(boston, container) {
  console.log('RenderPosts', boston)
  var people = boston.data;
  const len = boston.data.length;
  var html = '';
  for (let i = 0; i < len; i++) {
    html +=
      '<li class="post">' + '<h2>' + people[i][8] + '</h2>' + '<h3>' + people[i][11] + '</h3>';
  }
  container.innerHTML = '<ul id = "data">' + html + '</ul>';
}

function renderTopSalaries(boston,container) {
  console.log("RenderTopSalaries", boston)
  // Step 1 solution
  var people = boston.data;
  var topSalaries = people.sort((a, b) => b-a).slice(0, 5);
  const len = topSalaries.data.length;
  var html = "";
  for (let i = 0; i < len; i++) {
    html +=
      '<li class="top">' +
      '<h2>' +
      topSalaries[i][8] +
      '</h2>' +
      '<h3>' +
      topSalaries[i][11] +
      '</h3>';
  }

  container.innerHTML = '<ul id = "topSalaries">' + html + '</ul>';
}

// function renderTopEmployees(boston, container) {
//   //step 2 solution
//   var people = boston.data;
//   var topEmployees = people.filter((a) => a[11] > 200000);
//   const len = topEmployees.length;
//   var html = '';
//   for (let i = 0; i < len; i++) {
//     html +=
//       '<li class="top">' +
//       '<h2>' +
//       topEmployees[i][8] +
//       '</h2>' +
//       '<h3>' +
//       topEmployees[i][11] +
//       '</h3>';
//   }

//   container.innerHTML += '<ul id = "topEmployees">' + html + '</ul>';
// }
console.log('walkboston file loaded in')
renderTopSalaries(boston, document.getElementById('container')); //step 1 solution
// renderTopEmployees(boston, document.getElementById('container')); //step 2 solution
