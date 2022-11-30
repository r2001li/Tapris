import discord
from os import environ
from dotenv import load_dotenv

load_dotenv()
TOKEN = environ['TOKEN']

intents = discord.Intents.default()
intents.message_content = True

client = discord.Client(intents=intents)

@client.event
async def on_ready():
    print(f'{client.user} online.')

''' Features Start '''

@client.event
async def on_message(message):
    if message.author == client.user:
        return

''' Features End '''

client.run(token=TOKEN)