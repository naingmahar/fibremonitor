export default {
    name: 'Colour',
	children: [{
        name: 'Black',
        pathProps: 'black'
	}, {
		name: 'Blue',
		children: [{
			name: 'Aquamarine',
			attribute:"name"
		}, {
			name: 'Cyan'
		}, {
			name: 'Navy'
		}, {
			name: 'Turquoise'
		}]
	}, {
		name: 'Green'
	}, {
		name: 'Purple',
		children: [{
			name: 'Indigo'
		}, {
			name: 'Violet'
		}]
	}, {
		name: 'Red',
		children: [{
			name: 'Crimson'
		}, {
			name: 'Maroon'
		}, {
			name: 'Scarlet',
			children: [{
				name: 'Aquamarine',
				children: [{
					name: 'Aquamarine'
				}, {
					name: 'Cyan',
					children: [{
						name: 'Aquamarine'
					}, {
						name: 'Cyan'
					}, {
						name: 'Navy',
						children: [{
							name: 'Aquamarine'
						}, {
							name: 'Cyan'
						}, {
							name: 'Navy'
						}, {
							name: 'Turquoise'
						}]
					}, {
						name: 'Turquoise'
					}]
				}, {
					name: 'Navy'
				}, {
					name: 'Turquoise'
				}]
			}, {
				name: 'Cyan'
			}, {
				name: 'Navy'
			}, {
				name: 'Turquoise'
			}]
		}]
	}, {
		name: 'White'
	}, {
		name: 'Yellow'
	}]
}