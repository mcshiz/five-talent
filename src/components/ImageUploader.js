import React from 'react'
import Dropzone from 'react-dropzone'


const handleDropRejected = (...args) => console.log('reject', args)

class ImageUpload extends React.Component {
	constructor(props) {
		super(props)

		this.state = { preview: [] }
		this.handleDrop = this.handleDrop.bind(this)
	}

	handleDrop(accepted, rejected) {
		console.log(accepted)
		let images = this.state.preview
		for(let i = 0; i < accepted.length; i++) {
			images = [...images, accepted[i].preview]
		}
		this.setState({ preview: images })
	}

	render() {
		let images = this.state.preview.map((image, index) => (
			<img src={  image } alt="image preview" key={index}/>
		))
		return (
			<section>
				<Dropzone onDrop={ this.handleDrop } accept="image/jpeg,image/jpg,image/tiff,image/gif" multiple={ true } onDropRejected={ handleDropRejected }>
					Drag a file here or click to upload.
				</Dropzone>
				{images}
			</section>
		)
	}
}

export default ImageUpload