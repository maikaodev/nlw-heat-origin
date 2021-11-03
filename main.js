const linksSocialMedia = {
  github: 'maikaodev',
  youtube: 'maykbrito',
  facebook: 'maykbrito',
  instagram: 'maikaodev',
  twitter: 'maikaodev'
}

function changeLinksSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

/*Não precisa usar o getElementById para pegar elementos do HTML, ao usar dessa forma o navegador entende que estamos buscando alguma ID do HTML.

function changeLinksSocialMedia() {
  userName.textContent = linksSocialMedia.github
}

Como fazia antes: const userName = document.getElementById('userName').

*/

changeLinksSocialMedia()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  /*
  Fetch => Vai pegar a URL e trazer a resposta da API para o nosso código.
  Para usar as respostas nós precisamos da promise('.then()'). 
  Criamos uma arrow function para definir que o conteúdo obtido pela Fetch é json.
  */
  fetch(url)
    .then(response => response.json())
    /*Data está armazenando o response como json*/
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      UserLogin.textContent = data.login
      userImage.src = data.avatar_url
      userLink.href = data.html_url
      userLink.href = data.html_url
    })
}
getGithubProfileInfos()
