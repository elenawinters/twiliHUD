
let minimap = RequestScaleformMovie("minimap")

function toggleRadar(state) {
    DisplayRadar(state)
    BeginScaleformMovieMethod(minimap, "SETUP_HEALTH_ARMOUR")
    ScaleformMovieMethodAddParamInt(3)
	EndScaleformMovieMethod()
}


function invokeHUD(_type, data) {
	SendNUIMessage({
		callback: {
			type: _type,
			data: data,
		},
	})
}