class Classroom {
	constructor(dataPerson){
		this.classroomData = dataPerson.classroom;
	}
     

	getClassroom(message, valideDay) {
		const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  
		if (message.toLowerCase().includes('aula hoje') || valideDay) {
			const dayData = valideDay
				? this.classroomData[valideDay]
				: this.classroomData[today];
  
			if (dayData || valideDay) {
				const day = dayData.day;
				const classes = dayData.classrom.map((classroom) => {
					return `${classroom.name} (${classroom.teacher}) - Sala ${classroom.hour}`;
				});
				return `Aulas de hoje (${day}):\n${classes.join('\n')}`;
			} else {
				return 'Hoje não há aulas.';
			}
		} else if (message.toLowerCase().includes('aula')) {
			return 'Qual é o dia da semana da aula?';
		}
	}
}


module.exports = Classroom;