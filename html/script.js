
console.log('here')

window.addEventListener("message", function (event) {
	const data = event.data;
	const callback = data.callback;

    // console.log(JSON.stringify(data))

	if (callback != undefined) {
		const func = window[callback.type];
		if (func != undefined) {
			func(callback.data);
		}
	}
});

function post(type, data) {
	try {
		fetch(`https://${GetParentResourceName()}/${type}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=UTF-8",
			},
			body: JSON.stringify(data),
		});
	} catch { }
}

var statuses = Sortable.create(status_div, {
    // disabled: true,
    // dataIdAttr: 'data-order',
    // animation: 150,
})

function createStatus(data) {
    const name = data.name
    const order = data.order
    const icon_ref = data.ico
    const color_data = data.cdat

    if ($('#' + name).length) {
        console.warn(`${name} already exists as a status!`)
    }

    $('#status_div').append(`
        <div id="${name}" class="status_style" data-id="${order}" style="background-color: ${color_data['passive']}">

        </div>
    `)

}

function updateStatus(data) {
    const name = data.name
    const val = data.val
    const mval = data.mval
    // let val = text
    // if (text.includes('/')) {
    //     let temp = text.split('/')
    //     val = temp[0] + '<hr >' + temp[1]
    // }
    // val + '<hr>' + mval)

    $('#' + name).html(val + '<hr>' + mval)
    // $('#' + name).html(`
    //     <div class='val'>${val}</span>
    //     <hr>
    //     <div class='mval'>${mval}</span>
    // `)
}



const do_tests = false
if (do_tests === true) {
    createStatus( { 'name': 'health', 'order': 1, 'cdat': {'passive': [224, 50, 50, 0] } } )
    createStatus( { 'name': 'armor', 'order': 2, 'cdat': {'passive': [93, 182, 229, 0] } } )

    updateStatus( { 'name': 'health', 'val': 100, 'mval': 100} )
    updateStatus( { 'name': 'armor', 'val': 100, 'mval': 200} )
}


