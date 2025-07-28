import Resume_PDF from '../../assets/Resume_2025.pdf';

function Resume() {
  return (
    <div className='d-flex flex-column justify-content-center mt-3'>
      <object style={{ height: '100vh', width: '100%' }} data={Resume_PDF}></object>
    </div>
  );
}

export default Resume;
