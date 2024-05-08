const teamMembers = [

  {
    name: '<b>1.</b> Lebron James',
    age: 36,
    position: 'Forward',
    skills: ['Consistency', 'longevity', 'durability'],
    strengths: 'Ball IQ',
    weaknesses: 'Bad hairline',
    biography: 'greatest of all time, we are done with the 90s he is my sunshine',
    img: 'images/bron.jpg'
  },

  {
    name: '<b>2.</b> Victor Wembanyama',
    position: 'Center',
    skills: ['Bocking', 'Defending', 'Dunking'],
    strengths: 'Defending the Paint',
    weaknesses: 'New to the league',
    biography:
      'He is actually an alien, never seen someone look less like a human',
      img: 'images/wemby.jpg'
  },
  {
    name: '<b>3.</b>John Stockton',
    position: 'Guard',
    skills: ['Assists', 'Passing', 'Three Point Shooting'],
    strengths: 'Ball control',
    weaknesses: 'Defending',
    biography:
      'Little John Stockton little John Johnny Stockton',
      img: 'images/johnny.jpg'
  },
  {
    name: '<b>4.</b> Anthony Edwards',
    position: 'Guard',
    skills: ['Dominates the Paint', 'Mid Range', 'Perimiter Shooting'],
    strengths: 'Ball control',
    weaknesses: 'Passing',
    biography:
      'Dominating the league right now, and is he Jordans son?',
      img: 'images/ant.jpg'
  },
  {
    name: '<b>5.</b> Shaq',
    position: 'Center',
    skills: ['Dominates the Paint', 'Dunking', 'Breaking Backboards'],
    strengths: 'Yamming the ball',
    weaknesses: 'Anything out of the paint',
    biography:
      '7 feet of awesomeness, there has not been a more dominate player EVER',
      img: 'images/shaq.png'
  },
  {
    name: '<b>6.</b> Lamelo Ball',
    position: 'Guard',
    skills: ['Three Point shooting', 'Passing', 'Play Makeing'],
    strengths: 'He has aura',
    weaknesses: 'Gets hurt too much',
    biography:
      '2016 Chino Hills is unbebeatble, Lavar fell off but Lamelo still on',
      img: 'images/lamelo.png'
  },

  {
    name: '<b>7.</b> Klay Thompson',
    position: 'Guard',
    skills: ['Three Point shooting', 'Passing', 'Dribbling'],
    strengths: 'Did not miss',
    weaknesses: 'Hes mid now',
    biography:
      '37 points in one quater, all I need to say',
      img: 'images/klay.jpg'
  },

  {
    name: '<b>8.</b> 2017 Russell Westbrook',
    position: 'Guard',
    skills: ['Shooting', 'Assisting', 'Blocking'],
    strengths: 'Dominating.',
    weaknesses: 'Washed',
    biography:
      'Man averaged a tripple double, "That man name is Russel Westbrook"',
      img: 'images/russ.jpg'
  },

  {
    name: '<b>9.</b> 2015 Kevin Durant',
    position: 'Forward',
    skills: ['Defense', 'Shooting', 'Blocking'],
    strengths: 'Dominating.',
    weaknesses: 'he a snake',
    biography:
      'Dominated the league for a while, but did Russ dirty never forget.',
      img: 'images/kevin.jpg'
  },

  {
    name: '<b>10.</b> Jimmy Buttler',
    position: 'Forward',
    skills: ['Transition', 'Shooting', 'defense'],
    strengths: 'Leading the Team.',
    weaknesses: 'Why he always mad',
    biography:
      'Anthony Edwards possible half brother, he is just iconic',
      img: 'images/jimmy.png'
  },

  {
    name: '<b>11.</b> Kobe Bryant',
    position: 'Guard',
    skills: ['Ball handling', 'Shooting', 'defense'],
    strengths: 'Finding open shots',
    weaknesses: 'Ball Hog',
    biography:
      'RIP, one of best ever. True Inspiration, has Mamba Mentality',
      img: 'images/kobe.jpg'
  },

  {
    name: '<b>12.</b> Kwahi Leonard',
    position: 'Forward',
    skills: ['Dunking', 'Perimiter Defending', 'Ball IQ'],
    strengths: 'Awesomeness',
    weaknesses: 'Terrible Laugh',
    biography:
      'Great role player, but terrible when it comes to media',
      img: 'images/kwahi.jpg'
  },
]

function generateTeamCards() {
  const teamCardsContainer = document.getElementById('teamCards')

  teamMembers.forEach(member => {
    const card = document.createElement('div')
    card.classList.add('col-md-3')

    //styling card based on position:
    let backgroundColor

    switch (member.position.toLowerCase()) {
      case 'forward':
        backgroundColor = '#ffc107' // Yellow for forwards
        break
      case 'guard':
        backgroundColor = '#28a745' // Green for Guard
        break
      case 'center':
        backgroundColor = '#007bff' // Blue for Center
        break


    }


    console.log(backgroundColor)

    card.style.backgroundColor = backgroundColor


    //Create a list of Skills with <li> tags
    const skillsList = member.skills
      .map(skill => `<li> ${skill} </li>`).join('')

    card.innerHTML = `
                  <div class = "card h-100">
                      <div class = "card-header"> ${member.name}</div>
                      <div class = "card-body">
                      <img style="width: 200px" src=${member.img}><br><br>
                          <p><strong>Position:</strong> ${member.position}</p>
                          <p><strong>Skills:</strong> 
                              <ul>
                                  ${skillsList}
                              </ul>
                          </p>
                          <p><strong>Strengths:</strong> ${member.strengths}</p>
                          <p><strong>Weaknesses:</strong> ${member.weaknesses}</p>
                          <p><strong>Biography:</strong> ${member.biography}</p>
                      </div>
                  </div>
              `

    teamCardsContainer.appendChild(card)
  })
}

window.onload = generateTeamCards()