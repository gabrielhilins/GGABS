import PropTypes from "prop-types";
import styles from "./REAl.module.scss";
import { FaCheck } from "react-icons/fa";

const FileList = ({ files, uploadProgress, removeFile }) => (
  files.length > 0 && (
    <div className={styles.fileList}>
      <h4>Arquivos selecionados:</h4>
      <ul>
        {files.map((file, index) => (
          <li key={index} className={styles.fileItem}>
            <span>{file.name}</span>
            <div className={styles.progressContainer}>
              <div className={styles.progressBar} style={{ width: `${uploadProgress[file.name] || 0}%` }} />
            </div>
            <button onClick={() => removeFile(file.name)} className={styles.removeFileButton}>×</button>
            {uploadProgress[file.name] === 100 && <FaCheck className={styles.checkIcon} />}
          </li>
        ))}
      </ul>
    </div>
  )
);

FileList.propTypes = {
  files: PropTypes.arrayOf(PropTypes.instanceOf(File)).isRequired,
  uploadProgress: PropTypes.objectOf(PropTypes.number).isRequired,
  removeFile: PropTypes.func.isRequired,
};

export default FileList;