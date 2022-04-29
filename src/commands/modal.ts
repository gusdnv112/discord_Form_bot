import { Modal,TextInputComponent,showModal, ModalActionRow, ModalSubmitInteraction } from "discord-modals";
import { MessageButton,Interaction, Formatters,CommandInteraction } from "discord.js";

import { Client, Discord, Slash } from "discordx";
import { client } from "../main.js";


@Discord()
class modalTest{
  @Slash("test")
  async test(
  interaction: ModalSubmitInteraction
  ){
    showModal(modal, {
            client: client, // Client to show the Modal through the Discord API.
            interaction: interaction // Show the modal with interaction data.
    })

    // await interaction.reply("Test");
  }
  
}
const helloBtn = new MessageButton()
      .setLabel("Hello")
      .setEmoji("👋")
      .setStyle("PRIMARY")
      .setCustomId("hello-btn");
const question1 = new TextInputComponent() // We create a Text Input Component
          .setCustomId('question1')
          .setLabel('question1 text Here')
          .setStyle('LONG') //IMPORTANT: Text Input Component Style can be 'SHORT' or 'LONG'
          .setMinLength(4)
          .setMaxLength(100)
          .setPlaceholder('Write a text here')
          .setRequired(true) // If it's required or not
const question2 = new TextInputComponent() // We create a Text Input Component
          .setCustomId('wallet')
          .setLabel('Wallet address')
          .setStyle('SHORT') //IMPORTANT: Text Input Component Style can be 'SHORT' or 'LONG'
          .setMinLength(4)
          .setMaxLength(100)
          .setPlaceholder('Write a text here')
          .setRequired(true) // If it's required or not
const question3 = new TextInputComponent() // We create a Text Input Component
          .setCustomId('question3')
          .setLabel('Some text Here')
          .setStyle('SHORT') //IMPORTANT: Text Input Component Style can be 'SHORT' or 'LONG'
          .setMinLength(4)
          .setMaxLength(10)
          .setPlaceholder('Write a text here')
          .setRequired(true) // If it's required or not
const question4 = new TextInputComponent() // We create a Text Input Component
          .setCustomId('question4')
          .setLabel('Some text Here')
          .setStyle('SHORT') //IMPORTANT: Text Input Component Style can be 'SHORT' or 'LONG'
          .setMinLength(4)
          .setMaxLength(10)
          .setPlaceholder('Write a text here')
          .setRequired(true) // If it's required or not

let components = [question1,question2,question3,question4];

const modal = new Modal() // We create a Modal
      .setCustomId('customid')
      .setTitle('Test of Discord-Modals!')
      .addComponents(question1,question2,question3,question4);
