# Ayo, welcome to my generative AI sandbox turned project.

This project is designed to provide a container for my generative AI sandbox.

The first project I'll be working on is set of tools for free audio transcription and summarization (to be used alongside Microsoft Teams, Zoom, Discord, and maybe others). Still haven't come up with a good name for the program.

Other generative AI subprojects will appear in this repo someday.

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