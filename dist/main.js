import { getInput, setFailed } from '@actions/core';
import { exec } from '@actions/exec';
import { join } from 'path';
async function run() {
    const project = getInput('project');
    const build = getInput('build');
    const executable = getInput('executable');
    console.log(`##[add-matcher]${join(__dirname, '..', '.github', 'tsc.json')}`);
    const args = [
        `${join(process.cwd(), 'node_modules/.bin', executable)}`,
        '--noErrorTruncation',
        '--pretty',
        'false',
        '--incremental',
        'false',
    ];
    if (project) {
        args.push('--project', project);
    }
    if (build) {
        args.splice(1, 0, '--build', build);
        // Remove --noEmit and --noErrorTruncation, which are unsupported with --build
        args.splice(3, 2);
        // Change --incremental false for --incremental true, as incremental builds are required for composite builds
        args.splice(-1, 1, 'true');
    }
    try {
        await exec('node', args);
    }
    catch (error) {
        setFailed('');
    }
}
void run();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJtYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUU1QixLQUFLLFVBQVUsR0FBRztJQUNqQixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDcEMsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sSUFBSSxHQUFHO1FBQ1osR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLG1CQUFtQixFQUFFLFVBQVUsQ0FBQyxFQUFFO1FBQ3pELHFCQUFxQjtRQUNyQixVQUFVO1FBQ1YsT0FBTztRQUNQLGVBQWU7UUFDZixPQUFPO0tBQ1AsQ0FBQztJQUNGLElBQUksT0FBTyxFQUFFO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDaEM7SUFDRCxJQUFJLEtBQUssRUFBRTtRQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDcEMsOEVBQThFO1FBQzlFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLDZHQUE2RztRQUM3RyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUMzQjtJQUNELElBQUk7UUFDSCxNQUFNLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDekI7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNmLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNkO0FBQ0YsQ0FBQztBQUVELEtBQUssR0FBRyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRJbnB1dCwgc2V0RmFpbGVkIH0gZnJvbSAnQGFjdGlvbnMvY29yZSc7XG5pbXBvcnQgeyBleGVjIH0gZnJvbSAnQGFjdGlvbnMvZXhlYyc7XG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCc7XG5cbmFzeW5jIGZ1bmN0aW9uIHJ1bigpIHtcblx0Y29uc3QgcHJvamVjdCA9IGdldElucHV0KCdwcm9qZWN0Jyk7XG5cdGNvbnN0IGJ1aWxkID0gZ2V0SW5wdXQoJ2J1aWxkJyk7XG5cdGNvbnN0IGV4ZWN1dGFibGUgPSBnZXRJbnB1dCgnZXhlY3V0YWJsZScpO1xuXHRjb25zb2xlLmxvZyhgIyNbYWRkLW1hdGNoZXJdJHtqb2luKF9fZGlybmFtZSwgJy4uJywgJy5naXRodWInLCAndHNjLmpzb24nKX1gKTtcblx0Y29uc3QgYXJncyA9IFtcblx0XHRgJHtqb2luKHByb2Nlc3MuY3dkKCksICdub2RlX21vZHVsZXMvLmJpbicsIGV4ZWN1dGFibGUpfWAsXG5cdFx0Jy0tbm9FcnJvclRydW5jYXRpb24nLFxuXHRcdCctLXByZXR0eScsXG5cdFx0J2ZhbHNlJyxcblx0XHQnLS1pbmNyZW1lbnRhbCcsXG5cdFx0J2ZhbHNlJyxcblx0XTtcblx0aWYgKHByb2plY3QpIHtcblx0XHRhcmdzLnB1c2goJy0tcHJvamVjdCcsIHByb2plY3QpO1xuXHR9XG5cdGlmIChidWlsZCkge1xuXHRcdGFyZ3Muc3BsaWNlKDEsIDAsICctLWJ1aWxkJywgYnVpbGQpO1xuXHRcdC8vIFJlbW92ZSAtLW5vRW1pdCBhbmQgLS1ub0Vycm9yVHJ1bmNhdGlvbiwgd2hpY2ggYXJlIHVuc3VwcG9ydGVkIHdpdGggLS1idWlsZFxuXHRcdGFyZ3Muc3BsaWNlKDMsIDIpO1xuXHRcdC8vIENoYW5nZSAtLWluY3JlbWVudGFsIGZhbHNlIGZvciAtLWluY3JlbWVudGFsIHRydWUsIGFzIGluY3JlbWVudGFsIGJ1aWxkcyBhcmUgcmVxdWlyZWQgZm9yIGNvbXBvc2l0ZSBidWlsZHNcblx0XHRhcmdzLnNwbGljZSgtMSwgMSwgJ3RydWUnKTtcblx0fVxuXHR0cnkge1xuXHRcdGF3YWl0IGV4ZWMoJ25vZGUnLCBhcmdzKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRzZXRGYWlsZWQoJycpO1xuXHR9XG59XG5cbnZvaWQgcnVuKCk7XG4iXX0=