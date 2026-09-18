#include <iostream>
using namespace std;

int main() {
    float electricity, driving, flying, eating;

    cout << "Enter electricity usage (kWh/month): ";
    cin >> electricity;

    cout << "Enter driving distance (km/month): ";
    cin >> driving;

    cout << "Enter flights per year: ";
    cin >> flying;

    cout << "Enter meat meals per week: ";
    cin >> eating;

    float e = electricity * 0.82;
    float d = driving * 0.21;
    float f = flying * 90;
    float eat = eating * 5;

    float total = e + d + f + eat;

    cout << "Total Carbon Footprint: " << total << " kg CO2" << endl;

    cout << "\nPrecautions:\n";
    cout << "- Save electricity\n";
    cout << "- Use public transport\n";
    cout << "- Reduce flights\n";
    cout << "- Eat less meat\n";

    return 0;
}