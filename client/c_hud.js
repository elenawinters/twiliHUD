
// const map_thread = setTick(async () => {
//     RequestStreamedTextureDict("circlemap", false)

//     while (!HasStreamedTextureDictLoaded("circlemap")) {
//         await Delay(100)
//     }


//     AddReplaceTexture("platform:/textures/graphics", "radarmasksm", "circlemap", "radarmasksm")
//     SetMinimapClipType(1)
//     SetMinimapComponentPosition('minimap', 'L', 'B', -0.022, -0.026, 0.16, 0.245)
//     SetMinimapComponentPosition('minimap_mask', 'L', 'B', x + 0.21, y + 0.09, 0.071, 0.164)
//     SetMinimapComponentPosition('minimap_blur', 'L', 'B', -0.032, -0.04, 0.18, 0.22)
//     SetRadarBigmapEnabled(true, false)
//     await Delay(10)
//     SetRadarBigmapEnabled(false, false)
// });

// invokeHUD( 'createStatus', { 'name': 'health', 'order': 1, 'cdat': {'passive': [224, 50, 50, 0] } } )
// invokeHUD( 'createStatus', { 'name': 'armor', 'order': 2, 'cdat': {'passive': [93, 182, 229, 0] } } )
setTimeout(() => {
    invokeHUD( 'createStatus', { 'name': 'health', 'order': 1, 'cdat': { 'passive': '#e0323280' } } )
    invokeHUD( 'createStatus', { 'name': 'armor', 'order': 2, 'cdat': { 'passive': '#5db6e580' } } )
    invokeHUD( 'createStatus', { 'name': 'oxygen', 'order': 3, 'cdat': { 'passive': '#008cff80' } } )
    updateStatus()
}, 100)


function updateStatus() {
    const player = PlayerPedId()
    invokeHUD( 'updateStatus', { 'name': 'health', 'val': GetEntityHealth(player) - 100, 'mval': GetEntityMaxHealth(player) - 100 } )
    invokeHUD( 'updateStatus', { 'name': 'armor', 'val': GetPedArmour(player), 'mval': 100 } )
    invokeHUD( 'updateStatus', { 'name': 'oxygen', 'val': parseInt(GetPlayerUnderwaterTimeRemaining(PlayerId()) * 100), 'mval': 4000 } )
}

const main_thread = setTick(async () => {
    await Delay(1500)
    updateStatus()
});

onNet('twiliCore:damage:event', (suspect, victim, situation) => {
    if (victim['entity'] != PlayerPedId() ) { return; }
    updateStatus()
})


// postHUD('createStatus', { 'name': 'microphone', 'order': 0 } )
// invokeHUD( 'createStatus', { 'name': 'health', 'order': 1, 'cdat': {'passive': [224, 50, 50, 0] } } )
// invokeHUD( 'createStatus', { 'name': 'armor', 'order': 2, 'cdat': {'passive': [93, 182, 229, 0] } } )
// invokeHUD( 'createStatus', { 'name': 'armor', 'order': 3, } )

// invokeHUD( 'updateStatus', { 'name': 'health', 'val': 100, 'mval': 100 } )
// invokeHUD( 'updateStatus', { 'name': 'armor', 'val': 100, 'mval': 100 } )

// updateStatus( { 'name': 'health', 'val': 100, 'mval': 100} )
// updateStatus( { 'name': 'armor', 'val': 100, 'mval': 200} )