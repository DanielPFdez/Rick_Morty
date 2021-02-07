export default class Character {
  constructor({ name, image, gender, species, status }) {
    this.name = name
    this.image = image
    this.gender = gender
    this.species = species
    this.status = status
    this.$characterImageContainer = document.querySelector('#character-image-container')
    this.$characterNameContainer = document.querySelector('#character-name-container')
    this.$characterDescriptionContainer = document.querySelector('#character-description-container')
    this.render()
  }
  buildImage() {
    return `
      <img src=${this.image} alt=${this.name}>
    `
  }
  buildName() {
    return `

        <h2>${this.name}</h2>
    `
  }
  buildDescription() {
    return `

        <h3>Género: ${this.gender}</h3>
        <h3>Especie: ${this.species} </h3>
        <h3>Status: ${this.status}</h3>
    `
  }
  render() {
    this.$characterImageContainer.innerHTML = this.buildImage()
    this.$characterNameContainer.innerHTML = this.buildName()
    this.$characterDescriptionContainer.innerHTML = this.buildDescription()
  }
}
