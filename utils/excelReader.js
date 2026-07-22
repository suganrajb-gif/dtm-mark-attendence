import XLSX from 'xlsx';
import path from 'path';

const filePath = path.resolve('test-data', 'AttendanceData.xlsx');

/* -------- KEY VALUE SHEET (e.g. login credentials) -------- */
export function readKeyValueSheet(sheetName) {
  const workbook = XLSX.readFile(filePath);
  const sheet = workbook.Sheets[sheetName];

  if (!sheet) {
    throw new Error(`Sheet "${sheetName}" not found in AttendanceData.xlsx`);
  }

  const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });
  const data = {};

  for (let i = 1; i < rows.length; i++) {
    const [key, value] = rows[i];
    if (key) data[key] = value;
  }

  return data;
}

// sugan

/* -------- ROW BASED SHEET (e.g. student list, attendance records) -------- */
export function readTableSheet(sheetName) {
  const workbook = XLSX.readFile(filePath);
  const sheet = workbook.Sheets[sheetName];

  if (!sheet) {
    throw new Error(`Sheet "${sheetName}" not found in AttendanceData.xlsx`);
  }

  return XLSX.utils.sheet_to_json(sheet);
}
