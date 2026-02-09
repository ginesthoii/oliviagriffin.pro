from rembg import remove
import os

print("\nBACKGROUND REMOVER\n")

# --- INPUT FILE ---
input_path = input(
    "Enter input file path (ex: images/how-i-work.png): "
).strip()

if not input_path:
    print("ERROR: You must enter an input path.")
    exit()

if not os.path.exists(input_path):
    print("ERROR: Input file does not exist.")
    exit()


# --- OUTPUT FILE ---
output_path = input(
    "Enter output file path (ex: images/transparent/how-i-work_no_bg.png): "
).strip()

if not output_path:
    print("ERROR: You must enter an output path.")
    exit()

# Create output folder if needed
output_folder = os.path.dirname(output_path)
if output_folder and not os.path.exists(output_folder):
    os.makedirs(output_folder, exist_ok=True)


# --- PROCESS ---
print("\nWorking...\n")

with open(input_path, "rb") as f:
    input_bytes = f.read()

output_bytes = remove(input_bytes)

with open(output_path, "wb") as f:
    f.write(output_bytes)

print("DONE ✔")
print("Saved to:", output_path)