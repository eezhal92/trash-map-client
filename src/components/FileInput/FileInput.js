import React from 'react';
import { string } from 'prop-types';

import './FileInput.scss';

const FileInput = ({ id }) => (
  <div class="file-input">
    <input type="file" accept="image/*" id={id} capture="environment" />
    <label class="btn btn-block btn--ios" htmlFor={id}>Ambil Gambar</label>
  </div>
);

FileInput.propTypes = {
  id: string.isRequired,
};

export default FileInput;
