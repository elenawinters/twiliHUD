

RegisterCommand('maxhealth', (source, args) => {
    SetEntityMaxHealth(PlayerPedId(), parseInt(args[0]) + 100)
});