class ScheduleManager {
    constructor() {
      this.schedules = JSON.parse(localStorage.getItem('schedules')) || [];
    }
  
    add(schedule) {
      this.schedules.push(schedule);
      this.save();
    }
  
    edit(index, newSchedule) {
      this.schedules[index] = newSchedule;
      this.save();
    }
  
    delete(index) {
      this.schedules.splice(index, 1);
      this.save();
    }
  
    save() {
      localStorage.setItem('schedules', JSON.stringify(this.schedules));
    }
  
    getAll() {
      return this.schedules;
    }
  }
  
  const scheduleManager = new ScheduleManager();
  
  const dayOrder = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];
  
  const renderSchedules = () => {
    const list = document.getElementById('scheduleList');
    list.innerHTML = '';
  
    const sorted = [...scheduleManager.getAll()].sort(
      (a, b) => dayOrder.indexOf(a.day) - dayOrder.indexOf(b.day)
    );
  
    sorted.forEach((item, index) => {
      const li = document.createElement('li');
      li.className = item.type;
      li.innerHTML = `
        <span>${item.day}, ${item.time} - ${item.course} (${item.type})</span>
        <span class="actions">
          <button onclick="editSchedule(${index})">Edit</button>
          <button onclick="deleteSchedule(${index})">Hapus</button>
        </span>
      `;
      list.appendChild(li);
    });
  };
  
  const addSchedule = (e) => {
    e.preventDefault();
    const course = document.getElementById('course').value.trim();
    const day = document.getElementById('day').value;
    const time = document.getElementById('time').value;
    const type = document.getElementById('type').value;
  
    if (course && day && time && type) {
      scheduleManager.add({ course, day, time, type });
      document.getElementById('scheduleForm').reset();
      renderSchedules();
    }
  };
  
  const editSchedule = async (index) => {
    const old = scheduleManager.getAll()[index];
    const course = prompt('Edit Kegiatan:', old.course);
    const day = prompt('Edit Hari:', old.day);
    const time = prompt('Edit Jam:', old.time);
    const type = prompt('Edit Tipe (kuliah/organisasi):', old.type);
  
    if (course && day && time && type) {
      await new Promise((resolve) => setTimeout(resolve, 200));
      scheduleManager.edit(index, { course, day, time, type });
      renderSchedules();
    }
  };
  
  const deleteSchedule = (index) => {
    if (confirm('Yakin ingin menghapus jadwal ini?')) {
      scheduleManager.delete(index);
      renderSchedules();
    }
  };
  
  document.getElementById('scheduleForm').addEventListener('submit', addSchedule);
  document.addEventListener('DOMContentLoaded', renderSchedules);  