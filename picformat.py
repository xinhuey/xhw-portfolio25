import os
import sys
from PIL import Image
import pillow_heif

def convert_heic_to_jpg(input_dir, output_dir):
    # Create output directory if it doesn't exist
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    print(output_dir)
    
    # Process each file in the input directory
    for filename in os.listdir(input_dir):
        if filename.lower().endswith('.heic'):
            heic_path = os.path.join(input_dir, filename)
            
            # Read the HEIC image
            heif_file = pillow_heif.read_heif(heic_path)
            image = Image.frombytes(
                heif_file.mode,
                heif_file.size,
                heif_file.data,
                "raw",
                heif_file.mode
            )
            
            # Create the output JPEG filename
            new_filename = os.path.splitext(filename)[0] + '.jpg'
            jpg_path = os.path.join(output_dir, new_filename)
            
            # Save the image as JPEG
            image.save(jpg_path, 'JPEG')
            print(f"Converted {filename} to {new_filename}")

if __name__ == "__main__":
   
    convert_heic_to_jpg("./portfolio/public/images/gallery2425", "./portfolio/public/images/gallery2425pg")
