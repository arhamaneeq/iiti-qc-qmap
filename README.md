# qmap
A Project by QC Club IIT Indore

## Development Setup

### Cloning the Repository

Navigate to your desired folder and run
```bash
git clone https://github.com/arhamaneeq/iiti-qc-qmap.git
cd iiti-qc-qmap
```
This creates the root `iiti-qc-qmap` folder. Install the node package manager via `pip`, using
```bash
pip install npm
```
Create the Python development environment necessary for PennyLane to run by running
```
python -m venv .venv
pip install -r requirements.txt
```

### Running Programs
After `npm` is successfully installed, to view the frontend run 
```npm start```
To work on the Pennylane backend, run
```
./.venv/Scripts/Activate
```

**Note**
If you are seeing the error `running scripts is disabled on your system`, open Windows PowerShell as Administrator and run
```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```
If NodeJS is not installed on your system, install it from [here](https://nodejs.org/).