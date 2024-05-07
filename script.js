const teamMembers = [

        {
          name: '<b>1.</b> Lebron James',
          age: 36,
          activelyPlaying: true,
          position: 'Small/Power Forward',
          skills: ['Consistency', 'longevity', 'durability'], 
          strengths: 'Ball IQ',
          weaknesses: 'Bad hairline',
          biography:
            'greatest of all time, we are done with the 90s he is my sunshine'
        },

        {
          name: '<b>2.</b> Victor Wembanyama',
          position: 'Center',
          skills: ['Bocking', 'Defending', 'Dunking'],
          strengths: 'Defending the Paint',
          weaknesses: 'New to the league',
          biography:
            'He is actually an alien, never seen someone look less like a human'
        },
            {
                name: '<b>3.</b>John Stockton',
                position: 'Point Guard',
                skills: ['Assists', 'Passing', 'Three Point Shooting'],
                strengths: 'Ball control',
                weaknesses: 'Defending',
                biography:
                  'Little John Stockton little John Johnny Stockton'
              },
              {
                name: '<b>4.</b> Anthony Edwards',
                position: 'Guard',
                skills: ['Dominates the Paint', 'Mid Range', 'Perimiter Shooting'],
                strengths: 'Ball control',
                weaknesses: 'Passing',
                biography:
                  'Dominating the league right now, and is he Jordans son?'
              },
              {
                name: '<b>5.</b> Shaq',
                position: 'Center',
                skills: ['Dominates the Paint', 'Dunking', 'Breaking Backboards'],
                strengths: 'Yamming the ball',
                weaknesses: 'Anything out of the paint',
                biography:
                  '7 feet of awesomeness, there has not been a more dominate player EVER'
              },
              {
                name: '<b>6.</b> Lamelo Ball',
                position: 'Guard',
                skills: ['Three Point shooting', 'Passing', 'Play Makeing'],
                strengths: 'He has aura',
                weaknesses: 'Gets hurt too much',
                biography:
                  '2016 Chino Hills is unbebeatble, Lavar fell off but Lamelo still on'
              },

              {
                name: '<b>7.</b> Klay Thompson',
                position: 'Shooting guard/Small Forward',
                skills: ['Three Point shooting', 'Passing', 'Dribbling'],
                strengths: 'Did not miss',
                weaknesses: 'Hes mid now',
                biography:
                  '37 points in one quater, all I need to say'
              },

              {
                name: '<b>8.</b> 2017 Russel Westbrook',
                position: 'Point Guard',
                skills: ['Shooting', 'Assisting', 'Blocking'],
                strengths: 'Dominating.',
                weaknesses: 'Washed',
                biography:
                  'Man averaged a tripple double, "That man name is Russel Westbrook"'
              },

              {
                name: '<b>9.</b> 2017 Kevin Durant',
                position: 'Forward',
                skills: ['Defense', 'Shooting', 'Blocking'],
                strengths: 'Dominating.',
                weaknesses: 'he a snake',
                biography:
                  'Dominated the league for a while, but did Russ dirty never forget.'
              },

              {
                name: '<b>10.</b> Jimmy Buttler',
                position: 'Forward',
                skills: ['Transition', 'Shooting', 'defense'],
                strengths: 'Leading the Team.',
                weaknesses: 'Why he always mad',
                biography:
                  'Anthony Edwards possible half brother, he is just iconic'
              },

              {
                name: '<b>11.</b> Jimmy Buttler',
                position: 'Forward',
                skills: ['Transition', 'Shooting', 'defense'],
                strengths: 'Leading the Team.',
                weaknesses: 'Why he always mad',
                biography:
                  'Anthony Edwards possible half brother, he is just iconic'
              },
        
        
      ]
      
      function generateTeamCards() {
        const teamCardsContainer = document.getElementById('teamCards')
      
        teamMembers.forEach(member => {
          const card = document.createElement('div')
          card.classList.add('col-md-4')
      
          //styling card based on position:
          let backgroundColor
      
          switch (member.position.toLowerCase()) {
            case 'forward':
              backgroundColor = '#ffc107' // Yellow for forwards
              break
            case 'midfielder':
              backgroundColor = '#28a745' // Green for midfielders
              break
            case 'defender':
              backgroundColor = '#007bff' // Blue for defenders
              break
            case 'goalkeeper':
              backgroundColor = '#dc3545' // Red for goalkeepers
              break
            default:
              backgroundColor = '#6c757d' // Gray for other positions
          }
          card.style.backgroundColor = backgroundColor
      
          //Create a list of Skills with <li> tags
          const skillsList = member.skills
            .map(skill => `<li> ${skill} </li>`).join('')
      
          card.innerHTML = `
                  <div class = "card">
                      <div class = "card-header"> ${member.name}</div>
                      <div class = "card-body">
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