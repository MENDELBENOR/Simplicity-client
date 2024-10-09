import axios from 'axios';
import { saveAs } from 'file-saver';
import { Buffer } from 'buffer';

const ButtonExport: React.FC = () => {
  const handleExport = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/users/export');
      console.log(response);

      // בדיקה אם התגובה הייתה מוצלחת
      if (response.status !== 200 || !response.data.isSuccessful) {
        throw new Error('Network response was not ok');
      }

      // שמירת הקובץ בעזרת file-saver
      const fileBuffer = Buffer.from(response.data.data, 'base64');
      const blob = new Blob([fileBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      saveAs(blob, 'data.xlsx');

    } catch (error) {
      console.error('Error exporting data:', error);
    }
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={handleExport}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
      >
        Export
      </button>
    </div>
  );
}

export default ButtonExport;
