import FolkGallery from '../Gallery/FolkGallery';
import Header from '../Header';
import FolkMedia from '../Media/FolkMedia';
function FolkPage() {
  return (
    <div>
      <Header />
      <div className='container'>
        <FolkGallery />
        <FolkMedia />
      </div>
    </div>
  );
}

export default FolkPage;
