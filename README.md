
# Qlik Vector Search Extension

This package provides a Qlik Sense extension and an example Qlik Application Automation configuration (`automation.json`).

## 1. Installing the Qlik Application Automation

1. Open Qlik Application Automation in your Qlik Cloud environment.
2. Click on **Create new automation**.
3. In the automation editor, click the three dots (•••) in the top right and select **Import automation**.
4. Upload the provided `automation.json` file.
5. Create a Personal Access Token on your Databricks instance and update the variable **key** value.
6. Copy your Vector Search Index endpoint and paste it in the Call URL block.
7. From the **Start** block, copy your extension URL and your execution token to configure your extension later.
8. Save and activate the automation as needed.
   

## 2. Installing the Qlik Sense Extension

1. Download the extension files to your local machine.
2. Zip the contents of the extension folder (all files, including `qlik-vector-search.js`, `qlik-vector-search.qext`, etc.).
   - Do **not** zip the parent folder itself, only the files inside it.
3. In Qlik Sense:
   - Go to the **Qlik Management Console (QMC)** if you are using Qlik Sense Enterprise, or **Dev Hub > Extensions** if you are using Qlik Sense Desktop.
   - Click **Import** (QMC) or **Add new extension** (Dev Hub).
   - Upload the zipped extension package.
4. The extension will now be available in the assets panel when editing an app.
5. Drag and drop the extension onto a sheet and configure its properties as needed.


## Files
- `automation.json`: Qlik Application Automation configuration file.
- `qlik-vector-search.js`, `qlik-vector-search.qext`, etc.: Qlik Sense extension files.


## Support
For further help, refer to the Qlik documentation or contact your Qlik administrator.
