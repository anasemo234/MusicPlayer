const express = require('express')

const SpotifyWebApi = require('spotify-web-api-node')

const app = express()

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: 'f9a89cb78e504d1da785a4bb86ab6012',
        clientSecret: '34020cdd281b4e7ca06bd775cf6537e4'
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch(() => {
        res.sendStatus(400)
    })
})