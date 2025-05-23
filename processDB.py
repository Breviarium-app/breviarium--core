import json

def process_json():
    print("Start processing lectures celebrations...")
    # Path to the JSON file
    file_path = 'src/prayers/db/all_lectures.json'
    # Read the JSON file
    with open(file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)
    
    # Pattern to match
    pattern_to_remove = [
        {"ref": 0, "texto": 0, "type": "FIRSTLECTURE"},
        {"ref": 0, "texto": 0, "type": "PSALM"},
        {"ref": 0, "texto": 0, "type": "GOSPEL"}
    ]
    
    # Process each entry
    for entry in data:
        if 'lecturas' in entry:
            # Remove matching sequences
            lecturas = entry['lecturas']
            i = 0
            while i <= len(lecturas) - len(pattern_to_remove):
                if (i + len(pattern_to_remove) <= len(lecturas) and
                    lecturas[i:i + len(pattern_to_remove)] == pattern_to_remove):
                    del lecturas[i:i + len(pattern_to_remove)]
                else:
                    i += 1
    
    # Save the modified JSON back to the file
    with open(file_path, 'w', encoding='utf-8') as file:
        json.dump(data, file, indent=4, ensure_ascii=False)
    print("Process finish lectures celebrations ✅")

if __name__ == "__main__":
    process_json()