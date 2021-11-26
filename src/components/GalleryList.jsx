import GalleryItem from './GalleryItem'

function GalleryList({galleryData}) {
  return (
    <tr>
      {galleryData.map((item) => {
        console.log(item)
        return <GalleryItem item={item}/>
      })}
    </tr>
  )
}

export default GalleryList;