import discord
import os
from dotenv import load_dotenv

load_dotenv()
TOKEN = os.getenv('DISCORD_TOKEN')

client = discord.Client()

@client.event
async def on_ready():
    print(f'{client.user} online.')

''' Features Start '''

@client.event
async def on_message(message):
    if message.author == client.user:
        return

''' Features End '''

client.run(TOKEN)