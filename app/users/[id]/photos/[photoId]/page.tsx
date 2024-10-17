import React from 'react'

interface Props {
	params: {
		id: number,
		photoId: number,
	}
}
const PhotoPage = ({params}: Props) => {
  return (
	<div>PhotoPage</div>
  )
}

export default PhotoPage