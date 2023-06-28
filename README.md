 # Ayo, welcome to my generative AI sandbox.
 
 This project is designed to provide a container for **anyone** to get started with generative AI. I have included verbose comments in files to provide in-depth explanations into concepts and syntax.
 
 ## Project Descriptions:

 ```
 audio-transcription (WIP, INCOMPLETE/NONFUNCTIONAL)
 ``` 

 **```audio-transcription```** is set of tools for free audio transcription and summarization (to be used alongside Microsoft Teams, Zoom, Discord, and maybe others).

 ```
 logo-generation (WIP, INCOMPLETE/NONFUNCTIONAL)
 ```

 **```logo-generation```** is a react application which contains a chat interface to generate **text-based** images & designs. I created this with the intention of getting diffusion models to correctly place (english) text in their images.

 
 This project is dockerized and can be pulled from Docker Hub using the following command:
 
 ```
 docker pull braxai/generative-ai-sandbox:latest
 ```
 
 Other generative AI subprojects will appear in this repo someday.
 
 ## Features in development:

## Features in development:

1. GUI for ease-of-use
2. Personalized training to a solo voice
    a. "Repeat what you see on the screen into the mic"
3. Generalized accent detection
    a. Maybe adaptive speech recognition accounting for accent in the future

## Installation

To install the project, simply clone the repository and install the required dependencies using pip:

```
git clone https://github.com/your-username/your-repo.git
cd your-repo
pip install -r requirements.txt
```

## Usage

The project includes several scripts for audio transcription and summarization. Here is an overview of each script and its usage:

### audio-transcription-summary.py

This script is designed to extract features from audio data in the MInDS-14 dataset using a pretrained Wav2Vec2 model and feature extractor. The extracted features can then be used as input to other machine learning models for tasks such as speech recognition or speaker identification.

To use the script, simply run the following command:

```
python audio-transcription-summary.py
```

### audio-summarization.py

This script is designed to summarize audio data using a combination of feature extraction and text summarization techniques. The script uses the same pretrained Wav2Vec2 model and feature extractor as the `audio-transcription-summary.py` script to extract features from the audio data, and then applies a text summarization algorithm to generate a summary of the audio content.

To use the script, simply run the following command:

```
python audio-summarization.py --input-file <path-to-audio-file> --output-file <path-to-output-file>
```

### audio-transcription.py

This script is designed to transcribe audio data using a combination of feature extraction and automatic speech recognition (ASR) techniques. The script uses the same pretrained Wav2Vec2 model and feature extractor as the `audio-transcription-summary.py` script to extract features from the audio data, and then applies an ASR algorithm to generate a transcription of the audio content.

To use the script, simply run the following command:

```
python audio-transcription.py --input-file <path-to-audio-file> --output-file <path-to-output-file>
```

## Contributing

If you would like to contribute to the project, please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes and commit them to your branch
4. Push your changes to your forked repository
5. Create a pull request to merge your changes into the main repository

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.
